
using El_Proyecte_Grande.Data;
using El_Proyecte_Grande.DTOs;
using El_Proyecte_Grande.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace El_Proyecte_Grande.Controllers
{ 
    public class BasketController : BaseApiController
    {
        private readonly StoreContext _storeContext;

        public BasketController(StoreContext storeContext)
        {
            _storeContext = storeContext;
        }

        [HttpGet(Name = "GetBasket")]
        public async Task<ActionResult<BasketDto>> GetBasket()
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            return MapBasketToDto(basket);
        }

        [HttpPost]
        public async Task<ActionResult<BasketDto>> AddItemToBasket(int productId, int quantity)
        {
            var basket = await RetrieveBasket();

            if (basket == null) basket = CreateBasket();

            var product = await _storeContext.Products.FindAsync(productId);

            if (product == null) return BadRequest(new ProblemDetails { Title = "Product not found" });

            basket.AddItem(product, quantity);

            var result = await _storeContext.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetBasket", MapBasketToDto(basket));

            return BadRequest(new ProblemDetails { Title = "Problem saving item to basket" });
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        {
            var basket = await RetrieveBasket();

            if (basket == null) return NotFound();

            basket.RemoveItem(productId, quantity);

            var result = await _storeContext.SaveChangesAsync() > 0;

            if (result) return Ok();

            return BadRequest(new ProblemDetails { Title = "Problem removing item from the basket" });
        }

        private async Task<Basket> RetrieveBasket()
        {
            //if (string.IsNullOrEmpty(buyerId))
            //{
            //    Response.Cookies.Delete("buyerId");
            //    return null;
            //}

            return await _storeContext.Baskets
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        }

        private Basket CreateBasket()
        {
            var buyerId = User.Identity?.Name;
            if (string.IsNullOrEmpty(buyerId))
            {
                buyerId = Guid.NewGuid().ToString();
                var cookieOptions = new CookieOptions { IsEssential = true, Expires = DateTime.Now.AddDays(30) };
                Response.Cookies.Append("buyerId", buyerId, cookieOptions);
            }
            var basket = new Basket { BuyerId = buyerId };
            _storeContext.Baskets.Add(basket);
            return basket;
        }

        private BasketDto MapBasketToDto(Basket basket)
        {
            return new BasketDto
            {
                Id = basket.Id,
                BuyerId = basket.BuyerId,
                Items = basket.Items.Select(item => new BasketItemDto
                {
                    ProductId = item.ProductId,
                    Name = item.Product.Name,
                    Price = item.Product.Price,
                    PictureUrl = item.Product.PictureUrl,
                    Type = item.Product.Type,
                    Brand = item.Product.Brand,
                    Quantity = item.Quantity,
                }).ToList()
            };
        }

        //private string GetBuyerId()
        //{
        //    return User.Identity?.Name ?? Request.Cookies["buyerId"];
        //}

        //[HttpGet]
        //public async Task<ActionResult<BasketDto>> GetBasket()
        //{
        //    var basket = await RetireveBasket();

        //    if (basket == null) return NotFound();

        //    return MapBasketToDto(basket);
        //}

        //private BasketDto MapBasketToDto(Basket basket)
        //{
        //    return new BasketDto
        //    {
        //        Id = basket.Id,
        //        BuyerId = basket.BuyerId,
        //        Items = basket.Items.Select(item => new BasketItemDto
        //        {
        //            ProductId = item.ProductId,
        //            Name = item.Product.Name,
        //            Price = item.Product.Price,
        //            PictureUrl = item.Product.PictureUrl,
        //            Type = item.Product.Type,
        //            Brand = item.Product.Brand,
        //            Quantity = item.Quantity,
        //        }).ToList()
        //    }; 
        //}


        //[HttpPost]

        //public async Task<ActionResult<BasketDto> AddItemToBasket(int productId, int quantity)
        //{
        //    var basket = await RetireveBasket();
        //    if(basket == null) basket = CreateBasket();
        //    var product = await _storeContext.Products.FindAsync(productId);
        //    if(product == null) return NotFound();
        //    basket.AddItem(product, quantity);

        //    var result = await _storeContext.SaveChangesAsync() > 0;
        //    if(result) return CreatedAtRoute("GetBasket",);
        //    return BadRequest(new ProblemDetails { Title="Problem saving item to basket"});
        //}



        //[HttpDelete]

        //public async Task<ActionResult> RemoveBasketItem(int productId, int quantity)
        //{
        //    var basket = await RetireveBasket();
        //    if(basket == null) return NotFound();
        //    basket.RemoveItem(productId, quantity);
        //    var result = await _storeContext.SaveChangesAsync() > 0;
        //    if(result) return Ok();
        //    return BadRequest(new ProblemDetails { Title="Problem removing the item"})
        //}

        //private async Task<Basket> RetireveBasket()
        //{
        //    return await _storeContext.Baskets
        //            .Include(i => i.Items)
        //            .ThenInclude(p => p.Product)
        //            .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
        //}

        //private Basket CreateBasket()
        //{
        //    var buyerId = Guid.NewGuid().ToString();
        //    var cookieOptions = new CookieOptions { IsEssential = true, Expires= DateTime.Now.AddDays(30) };
        //    Response.Cookies.Append("buyerId", buyerId, cookieOptions);
        //    var basket = new Basket { BuyerId = buyerId };
        //    _storeContext.Baskets.Add(basket);
        //    return basket;
        //}
    }
}