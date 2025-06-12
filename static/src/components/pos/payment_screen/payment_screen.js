/** @odoo-module */
// Ceci specifie que ceci est un module Odoo, et ca doit commencer le fichier a la premiere ligne sinon il y aura erreur


// On importe Registries qui permet de manipuler les composants du module point_of_sale
import Registries from "point_of_sale.Registries"
// // On importe le composant PaymentScreen de point_of_sale vu qu'on cherche à heriter de lui
import PaymentScreen from "point_of_sale.PaymentScreen"

// Pour heriter d'un composant on cree une variable qui prend comme valeur une fonction flechée comme ce qui est montré
// ci-dessous:
// le parametre payment_screen est le composant que l'on veut heriter, le nom de ce paramettre c'est nous qui le
// definissaons, ce n'est pas un mot clé
const paymentScreenInherit = (payment_screen) => class extends payment_screen {
    setup() {
        super.setup()
        // On appelle le setup du parent PaymentScreen
        //     Cette fonction setup est appelee automatiquement par Odoo quand le composant PaymentScreen est appelé
        console.log("Inherited PaymentScreen Screen")
    }

    //     heritage de methode
    addNewPaymentLine({detail: paymentMethod}) {
        // Avec ca je recupere ce que renvoi la methode parente de ce composant et je l'execute directement pour eviter
        // de manquer les fonctionnalites parentes de cette methode
        // Si on veut mondifier dans la logique de la methode faut copier tout le code de la methode parente et
        // le modifier selon le besoin
        const payment_line = super.addNewPaymentLine({detail: paymentMethod})
        console.log("Inherited methode addNewPaymentLine")
        // on affiche le contenu du retour
        console.log(payment_line)
    }
//      Nouvelle methode qui est appelée pqr un bouton sur l'interface
    go_next(){
        console.log("Ma nouvelle fonction go_next")
    }
}
// Comme Registries regroupe tous les composants, on ajoute les customisations que l'on a faites dans
// paymentScreenInherit à son composant parent qu'on a importé en faisant appel à la méthode extend de cette facon :
// Registries.Component.extend(PaymentScreen, paymentScreenInherit) la methode extend prend comme parametre le composant
// parent PaymentScreen et la fonction paymentScreenInherit qui contient les customisations que l'on a faites
Registries.Component.extend(PaymentScreen, paymentScreenInherit)
