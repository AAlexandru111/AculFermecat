namespace El_Proyecte_Grande.Entities.OrderAggregate
{
    public class Order
    {

        public int Id { get; set; }
        public string BuyerId { get; set; }
        public ShippingAdress ShippingAdress { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        public List<OrderItem> OrderItems { get; set; }
        public long Subtotal { get; set; }

        public long DeliveryFee { get; set; }
        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;

        public string PaymentIntentId { get; set; }
        public long GetTotal()
        {
            return Subtotal + DeliveryFee;
        }
    }
}
