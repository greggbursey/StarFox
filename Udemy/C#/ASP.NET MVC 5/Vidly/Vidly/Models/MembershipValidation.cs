using System;
using System.ComponentModel.DataAnnotations;

namespace Vidly.Models
{
    public class MembershipValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var customer = (Customer)validationContext.ObjectInstance;

            if (customer.MembershipTypeID == MembershipType.Unknown ||// none chosen
                customer.MembershipTypeID == (byte)Enums.MembershipType.PayAsYouGo)
                return ValidationResult.Success;

            if (customer.Birthday == null)
                return new ValidationResult("Birthday is required.");

            var age = DateTime.Today.Year - customer.Birthday.Value.Year;

            return (age >= 18)
                ? ValidationResult.Success
                : new ValidationResult("Customer should be at least 18 years old to go on a membership.");
        }
    }
}