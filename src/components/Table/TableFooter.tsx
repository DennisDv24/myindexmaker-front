import { FC } from 'react'

type TableProps = {
    handleLoadMore: () => void;
}

export const TableFooter: FC<TableProps> = ({
    handleLoadMore
}) => {

    return (
        <tfoot>
            <tr>
                <td>
                    <button
                        onClick={handleLoadMore}
                    >load more</button>
                </td>
            </tr>
        </tfoot>
    )
}