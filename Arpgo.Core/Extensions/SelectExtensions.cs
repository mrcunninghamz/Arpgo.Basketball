using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace Arpgo.Core.Extensions
{
    public static class SelectExtensions
    {
        public static string GetInputName<TModel, TProperty>(Expression<Func<TModel, TProperty>> expression)
        {
            if (expression.Body.NodeType == ExpressionType.Call)
            {
                var methodCallExpression = (MethodCallExpression)expression.Body;
                var name = GetInputName(methodCallExpression);
                return name.Substring(expression.Parameters[0].Name.Length + 1);

            }
            return expression.Body.ToString().Substring(expression.Parameters[0].Name.Length + 1);
        }

        private static string GetInputName(MethodCallExpression expression)
        {
            // p => p.Foo.Bar().Baz.ToString() => p.Foo OR throw...
            var methodCallExpression = expression.Object as MethodCallExpression;

            if (methodCallExpression != null)
            {
                return GetInputName(methodCallExpression);
            }
            return expression.Object.ToString();
        }

        public static MvcHtmlString EnumDropDownListForWithDescription<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression) where TModel : class
        {
            return EnumDropDownListForWithDescription(htmlHelper, expression, null, null);
        }

        public static MvcHtmlString EnumDropDownListForWithDescription<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, string optionLabel) where TModel : class
        {
            return EnumDropDownListForWithDescription(htmlHelper, expression, optionLabel, null);
        }

        public static MvcHtmlString EnumDropDownListForWithDescription<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, string optionLabel, object htmlAttributes) where TModel : class
        {
            var inputName = GetInputName(expression);
            var value = htmlHelper.ViewData.Model == null
                ? default(TProperty)
                : expression.Compile()(htmlHelper.ViewData.Model);

            return htmlHelper.DropDownList(inputName, ToSelectList(typeof(TProperty), value.ToString()), optionLabel, htmlAttributes);
        }

        public static SelectList ToSelectList(Type enumType, string selectedItem)
        {
            var items = new List<SelectListItem>();
            foreach (var item in Enum.GetValues(enumType))
            {
                var field = enumType.GetField(item.ToString());
                var attribute = field.GetCustomAttributes(typeof(DescriptionAttribute), true).FirstOrDefault();
                var title = attribute == null ? item.ToString() : ((DescriptionAttribute)attribute).Description;
                var listItem = new SelectListItem
                {
                    Value = ((int)item).ToString(),
                    Text = title,
                    Selected = selectedItem == ((int)item).ToString()
                };
                items.Add(listItem);
            }

            return new SelectList(items, "Value", "Text", selectedItem);
        }

        public static List<EnumAttributes> ToEnumAttributes(Type enumType, string selectedItem)
        {
            var items = new List<EnumAttributes>();
            foreach (var item in Enum.GetValues(enumType))
            {
                var field = enumType.GetField(item.ToString());
                var attribute = field.GetCustomAttributes(typeof(DescriptionAttribute), true).FirstOrDefault();
                var discription = attribute == null ? item.ToString() : ((DescriptionAttribute)attribute).Description;
                var listItem = new EnumAttributes
                {
                    Value = ((int)item).ToString(),
                    StringValue = item.ToString(),
                    Description = discription
                };
                items.Add(listItem);
            }

            return items;
        }
    }
    
    public class EnumAttributes
    {
        public string Value { get; set; }

        public string Description { get; set; }

        public string StringValue { get; set; }
    }
}
