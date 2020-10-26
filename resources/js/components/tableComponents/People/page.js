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
import DeletePerson from "../../tableComponents/DeleteForms/DeletePerson";
import EditPeople from "../EditPeople";
function page({ people, peopleFetch }) {
    useEffect(() => {
        peopleFetch();
    }, [people]);
    return <div className="tableDiv">
    <h1>Personas</h1>
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">ID Persona</TableCell>
                    <TableCell align="center">Nombre</TableCell>
                    <TableCell align="center">Apellidos</TableCell>
                    <TableCell align="center">E-Mail</TableCell>
                    <TableCell align="center">Dirección</TableCell>
                    <TableCell align="center">Institución</TableCell>
                    <TableCell align="center">Carrera</TableCell>
                    <TableCell align="center">Editar</TableCell>
                    <TableCell align="center">Eliminar</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {people.map(person => (
                    <TableRow key={person.id_person}>
                        <TableCell align="center">
                            {person.id_person}
                        </TableCell>
                        <TableCell align="center">
                            {person.name}
                        </TableCell>
                        <TableCell align="center">
                            {person.apellidoPaterno}{" "}
                            {person.apellidoMaterno}
                        </TableCell>
                        <TableCell align="center">
                            {person.email}
                        </TableCell>
                        <TableCell align="center">
                            {person.address}
                        </TableCell>
                        <TableCell align="center">
                            {person.institution}
                        </TableCell>
                        <TableCell align="center">
                            {person.career}
                        </TableCell>
                        <TableCell align="center">
                            <EditPeople
                                id_person={person.id_person}
                                name={person.name}
                                apellidoPaterno={person.apellidoPaterno}
                                apellidoMaterno={person.apellidoMaterno}
                                email={person.email}
                                address={person.address}
                                institution={person.institution}
                                career={person.career}
                            />
                        </TableCell>
                        <TableCell align="center">
                            <DeletePerson
                                id_person={person.id_person}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
</div>;
}

export default page;
