module Product.Healapp where

import Prelude

import Engineering.Types.App (Flow)
import UI.Flow (homeScreen,infoScreen) as UI
import UI.Types 


homescreen = do
	action <- UI.homeScreen
	case action of
		HomeScreenClick -> dothisFunction

dothisFunction = do
	action <- UI.infoScreen	
	pure unit






