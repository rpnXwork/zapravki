import {useCallback} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

export const useMessage = () => {
  return useCallback(text => {
    if (M && text) {
      M.toast({ html: text })
    }
  }, [])
}
