import './styles.css'

export default function TableFooter(props) {
  const {currentPage, countPages, countSrings, handleChangeCurrPage} = props


  return (
    <tfoot>
      <tr>
        <td colSpan="5">
          <div className="tfootContent">
            <div>
              {
                countSrings !== 0 ?
                  `${ (currentPage-1)*50 + 1 } - ${ (currentPage-1)*50 + countSrings }`
                :
                  '0'
              }
            </div>
            {
              countPages > 1 &&
                <div className="buttons">
                  { Array(countPages).fill(0).map((_, index) => {
                    return (
                      <button
                        key={ index+1 }
                        className={ index+1 === currentPage ? "actionButton" : "" }
                        onClick={ handleChangeCurrPage.bind(null, index+1) }
                      >
                        { index+1 }
                      </button>
                    )
                  }) }
                </div>
            }
          </div>
        </td>
      </tr>
    </tfoot>
  )
}
