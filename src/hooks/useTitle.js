import { useEffect } from "react"

const useTitle = title => {
      useEffect(() => {
            document.title = `${title} - Mr. Electric`;
      }, [title])
}

export default useTitle;