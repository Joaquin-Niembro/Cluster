import React, { useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Paper,
    TableHead
} from "@material-ui/core";
import DeleteSector from "../DeleteForms/DeleteSector";
import EditSector from "../EditSector";
function page({ sectors , sectorsFetch}) {
    useEffect(()=>{
        sectorsFetch()
    },[sectors])
    return (
        <div className="tableDiv">
            <h1>Sectores</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Sector</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Descripción</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sectors.map(sector => (
                            <TableRow key={sector.id_sector}>
                                <TableCell align="center">
                                    {sector.id_sector}
                                </TableCell>
                                <TableCell align="center">
                                    {sector.name}
                                </TableCell>
                                <TableCell align="center">
                                    {sector.description}
                                </TableCell>

                                <TableCell align="center">
                                    <EditSector
                                        id_sector={sector.id_sector}
                                        name={sector.name}
                                        description={sector.description}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteSector
                                        id_sector={sector.id_sector}
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
