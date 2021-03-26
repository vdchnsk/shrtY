import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "../scss/_linkList.scss"
import { UrListIsEmpty } from './UrListIsEmpry';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const LinkList = ({links}) => {
    console.log(links.length)
    const classes = useStyles();

    if (!links.length){
        return (
            <UrListIsEmpty/>
        )
    }

    return (
        <TableContainer className="mainTab-links" component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow className="table__heading"> 
                        <TableCell align="center">Cut links</TableCell>
                        <TableCell align="center">Old links</TableCell>
                        <TableCell align="center">Number of clicks</TableCell>
                        <TableCell align="center">Date of creation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {links.map((link) => (
                        <TableRow className="table__content">
                            <TableCell align="center">{link.to}</TableCell>
                            <TableCell align="center">{link.from}</TableCell>
                            <TableCell align="center">{link.numberOfCLicks}</TableCell>
                            <TableCell align="center">{new Date(link.date).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
  )
}