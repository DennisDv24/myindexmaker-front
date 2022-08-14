import { FC } from 'react'

type TableProps = {
    size: number;
    buttonClass: string;
    handleLoadMore: () => void;
}

export const TableFooter: FC<TableProps> = ({
    size,
    buttonClass,
    handleLoadMore
}) => {

    return (
        <tfoot>
            <tr>
                <td colSpan={size}>
                    <button
                    className={buttonClass}
                    style={{
                        width: '100%'
                    }}
                        onClick={handleLoadMore}
                    >load more</button>
                </td>
            </tr>
        </tfoot>
    )
}