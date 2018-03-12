module UI.Flow where

import Prelude (bind, pure)
import Engineering.Helpers.Commons (runUI')
import Engineering.Types.App (Flow,liftLeft)
import UI.Types 


homeScreen = do
	action <- runUI' HomeScreen
	case action of
		HomeScreenClick -> pure HomeScreenClick

infoScreen = do
	action <- runUI' InfoScreen
	case action of
		InfoScreenRendered -> pure InfoScreenRendered




