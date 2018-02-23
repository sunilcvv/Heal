module Presto.Core.Types.App
  ( AppEffects
  , AppFlow
  , LOCAL_STORAGE
  , NETWORK
  , STORAGE
  , UI
  ) where

import Control.Monad.Aff (Aff)
import Control.Monad.Aff.AVar (AVAR)
import Control.Monad.Aff.Console (CONSOLE)
import Control.Monad.Eff (kind Effect)
import Control.Monad.Eff.Exception (EXCEPTION)

foreign import data LOCAL_STORAGE :: Effect
foreign import data STORAGE :: Effect
foreign import data NETWORK :: Effect
foreign import data UI :: Effect

type AppEffects eff = (avar :: AVAR, ui :: UI, storage :: STORAGE, ls :: LOCAL_STORAGE, exception :: EXCEPTION, network :: NETWORK, console :: CONSOLE | eff)
type AppFlow eff = Aff (AppEffects eff)
