import { createContext, useState, useContext } from 'react';

// Création du contexte
const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé à l intérieur dun CartProvider');
  }
  return context;
};

// Composant Provider qui va envelopper l'application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    const itemToAdd = {...product};
    setCart([...cart, itemToAdd]);
  };

  // Fonction pour supprimer un produit du panier
  const removeFromCart = (productId) => {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  // Fonction pour obtenir la quantité d'un produit dans le panier
  const getQuantity = (productId) => {
    return cart.filter(item => item.id === productId).length;
  };

  // Calcul du total du panier
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Valeurs à exposer dans le contexte
  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    getQuantity,
    total,
    cartCount: cart.length
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;