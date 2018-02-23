module Product.Flow where

import Prelude

import Engineering.Types.App (Flow)
import Product.Types (ScreenFailure)
import UI.Flow (splashScreen) as UI

screenFlow :: Flow ScreenFailure Unit
screenFlow = do
  _              <- UI.splashScreen
  -- items          <- Remote.fetchList
  -- selectedItems  <- UI.shoppingItemList items
  -- _              <- UI.invoiceScreen selectedItems
  -- UI.checkoutScreen
  pure unit
