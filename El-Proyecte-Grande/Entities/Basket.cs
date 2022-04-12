using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace El_Proyecte_Grande.Entities
{
    public class Basket
    {
        public int Id { get; set; }

        public string BuyerId { get; set; }

        public List<BasketItem> Items { get; set; } = new List<BasketItem>();

        public string? PaymentIntentId { get; set; }

#pragma warning disable CS8632 // The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.
        public string? ClientSecret { get; set; }
#pragma warning restore CS8632 // The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BasketItem { Product = product, Quantity = quantity });
            }
            var existingItem = Items.FirstOrDefault(item => item.ProductId == product.Id);
            if (existingItem != null)
            {
                existingItem.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId, int quantity)
        {
            var item = Items.FirstOrDefault(item => item.ProductId == productId);
            if (item == null) return;
            item.Quantity -= quantity;
            if (item.Quantity == 0) Items.Remove(item);

        }
    }
}