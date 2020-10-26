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
import DeleteAbility from "../DeleteForms/DeleteAbility";
import EditAbility from "../EditAbility";
function page({ abilities, abilitiesFetch }) {
    useEffect(() => {
        abilitiesFetch();
    }, [abilities]);
    return (
        <div className="tableDiv">
            <h1>Habilidades</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Habilidad</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">Descripción</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {abilities.map(ability => (
                            <TableRow key={ability.id_ability}>
                                <TableCell align="center">
                                    {ability.id_ability}
                                </TableCell>
                                <TableCell align="center">
                                    {ability.name}
                                </TableCell>
                                <TableCell align="center">
                                    {ability.description}
                                </TableCell>

                                <TableCell align="center">
                                    <EditAbility
                                        id_ability={ability.id_ability}
                                        name={ability.name}
                                        description={ability.description}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteAbility
                                        id_ability={ability.id_ability}
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
