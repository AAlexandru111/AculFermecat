using System;
using System.Collections.Generic;
using El_Proyecte_Grande.Entities.OrderAggregate;


namespace El_Proyecte_Grande.DTOs
{
    public class OrderDto
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public ShippingAdress ShippingAdress { get; set; }
        public DateTime OrderDate { get; set; }
        public List<OrderItemDto> OrderItems { get; set; }
        public long Subtotal { get; set; }
        public long DeliveryFee { get; set; }
        public string OrderStatus { get; set; }
        public long Total { get; set; }

    }
}
