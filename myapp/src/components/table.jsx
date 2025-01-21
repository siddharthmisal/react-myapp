import TableHeader from "./tableheader"
import TableBody from "./tablebody"
import './table.css'
const Table = () => {
    return (
        <div>
            <table className="one">
                <TableHeader />
                <TableBody />
            </table>
        </div>
    )
}

export default Table