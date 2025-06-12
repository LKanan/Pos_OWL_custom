/** @odoo-module */

import Registries from "point_of_sale.Registries"
import ProductScreen from "point_of_sale.ProductScreen"

const {onWillStart} = owl
const productScreenInherit = (product_screen) => class extends product_screen {
    setup() {
        super.setup()
        console.log("ProductScreen Inherited")
        // console.log("POS ENV", this.env)
        // console.log("POS ENV.POS", this.env.pos)
        console.log("POS ENV.POS.BD", this.env.pos.db)

        this.favorite_products  = []
    //     Appel d'une methode RPC
        onWillStart(
            async()=>{
                // const data = await this.env.services.rpc({
                //     Object parameter
                //     'model':'product.product', //nom du model
                //     'method': 'search', //methode existante du model, cette methode permet de faire une recherche avec des conditions mises dans le domain
                //     'kwargs': {
                //         'domain':[['available_in_pos','=',true], ['product_tag_ids.name','=','Favorite']]
                //     }
                // }
                // )

                //Appel d'une methode qu'on a creer nous meme dans le model product.product
                const data = await this.env.services.rpc({
                //     Object parameter
                    'model':'product.product', //nom du model
                    'method': 'getFavoriteProducts',
                    'args': [{}]
                }
                )
                this.favorite_products = data
                console.log("RPC data",data)
            }
        )
    }

    get favoriteProducts(){
       // let products = this.env.pos.db.get_product_by_category(this.selected_categoryId)
       // let products = this.env.pos.db.get_product_by_category(4);
       let products = this.env.pos.db.product_by_id;
       console.log("Product category 2", products)
        let favorites=[]
        this.favorite_products.forEach(p => favorites.push(products[p]))
        return favorites
    }

}
Registries.Component.extend(ProductScreen, productScreenInherit)
