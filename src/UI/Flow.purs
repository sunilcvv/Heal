module UI.Flow where

import Prelude

import Engineering.Helpers.Commons (runUI')
import Engineering.Types.App (Flow, liftLeft)
import Product.Types ( ScreenFailure(..))
import Remote.Flow as Remote
import UI.Flow as UI
import UI.Types (SplashScreen(..), SplashScreenAction(..))


splashScreen :: Flow ScreenFailure Unit
splashScreen = do
	action <- runUI' SplashScreen
	case action of
		SplashScreenRendered -> pure unit


-- shoppingItemList :: Array ItemList ->  Flow ScreenFailure (Array SelectedList)
-- shoppingItemList items = do
--  action <- runUI' (ShoppingItemListScreen items)
--  case action of
-- 	 ListSelected arrObj -> pure arrObj
-- 	 ChooseListScreenAbort -> liftLeft UserAbort
--
-- invoiceScreen ::Array SelectedList->Flow ScreenFailure Unit
-- invoiceScreen selectedList = do
-- 	action <- runUI' (InvoiceScreen selectedList)
-- 	case action of
-- 		InvoiceScreenRendered -> pure unit
-- 		InvoiceScreenAbort -> do
-- 			items <- Remote.fetchList
-- 			res <- shoppingItemList items
-- 			_ <- invoiceScreen res
-- 			pure unit
-- 		-- InvoiceScreenAbort -> liftLeft UserAbort
--
-- checkoutScreen :: Flow ScreenFailure Unit
-- checkoutScreen = do
-- 	action <- runUI' CheckoutScreen
-- 	case action of
-- 		CheckoutScreenRendered -> pure unit
