using Microsoft.AspNetCore.Identity;

namespace El_Proyecte_Grande.Entities
{
    public class User : IdentityUser<int>
    {
        public UserAdress Adress { get; set; }
    }
}
