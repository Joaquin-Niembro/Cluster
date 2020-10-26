import React, { useEffect } from "react";
import DeleteCareer from "../DeleteForms/DeleteCareer";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    TableHead
} from "@material-ui/core";
import EditCareer from "../EditCareer";
function page({careers, careersFetch}) {
    useEffect(()=>{
        careersFetch()
    },[careers])
    return (
        <div className="tableDiv">
            <h1>Carreras</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Carrera</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Institución</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {careers.map(career => (
                            <TableRow key={career.id_career}>
                                <TableCell align="center">
                                    {career.id_career}
                                </TableCell>
                                <TableCell align="center">
                                    {career.name}
                                </TableCell>
                                <TableCell align="center">
                                    {career.institution}
                                </TableCell>

                                <TableCell align="center">
                                    <EditCareer
                                        id_career={career.id_career}
                                        name={career.name}
                                        institution={career.institution}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteCareer
                                        id_career={career.id_career}
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
