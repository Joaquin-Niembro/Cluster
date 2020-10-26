import React, { useEffect } from "react";
import DeleteVacant from "../DeleteForms/DeleteVacant";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    TableHead
} from "@material-ui/core";
import EditVacant from "../EditVacant";
function page({ vacants, vacantsFetch }) {
    useEffect(() => {
        vacantsFetch();
    }, [vacants]);
    return (
        <div className="tableDiv">
            <h1>Vacantes</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Vacante</TableCell>
                            <TableCell align="center">Descripción</TableCell>
                            <TableCell align="center">Salario</TableCell>
                            <TableCell align="center">Duración</TableCell>
                            <TableCell align="center">Compañia</TableCell>
                            <TableCell align="center">Habilidad</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vacants.map(vacant => (
                            <TableRow key={vacant.id_vacant}>
                                <TableCell align="center">
                                    {vacant.id_vacant}
                                </TableCell>
                                <TableCell align="center">
                                    {vacant.description}
                                </TableCell>
                                <TableCell align="center">
                                    {vacant.salary}
                                </TableCell>
                                <TableCell align="center">
                                    {vacant.duration}
                                </TableCell>
                                <TableCell align="center">
                                    {vacant.company}
                                </TableCell>
                                <TableCell align="center">
                                    {vacant.ability}
                                </TableCell>
                                <TableCell align="center">
                                    <EditVacant
                                        id_vacant={vacant.id_vacant}
                                        description={vacant.description}
                                        salary={vacant.salary}
                                        duration={vacant.duration}
                                        company={vacant.company}
                                        ability={vacant.ability}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteVacant
                                        id_vacant={vacant.id_vacant}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default page;
