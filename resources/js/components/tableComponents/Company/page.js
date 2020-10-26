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
import EditCompany from "../EditCompany";
import DeleteCompany from "../DeleteForms/DeleteCompany";
function page({ companies, companiesFetch }) {
    useEffect(() => {
        companiesFetch();
    }, [companies]);
    return (
        <div className="tableDiv">
            <h1>Compañias</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Company</TableCell>
                            <TableCell align="center">Nombre</TableCell>
                            <TableCell align="center">RFC</TableCell>
                            <TableCell align="center">Dirección</TableCell>
                            <TableCell align="center">Perfil</TableCell>
                            <TableCell align="center">Horario</TableCell>
                            <TableCell align="center">Sector</TableCell>
                            <TableCell align="center">Editar</TableCell>
                            <TableCell align="center">Eliminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companies.map(company => (
                            <TableRow key={company.id_company}>
                                <TableCell align="center">
                                    {company.id_company}
                                </TableCell>
                                <TableCell align="center">
                                    {company.name}
                                </TableCell>
                                <TableCell align="center">
                                    {company.rfc}
                                </TableCell>
                                <TableCell align="center">
                                    {company.address}
                                </TableCell>
                                <TableCell align="center">
                                    {company.profile}
                                </TableCell>
                                <TableCell align="center">
                                    {company.schedule}
                                </TableCell>
                                <TableCell align="center">
                                    {company.sector}
                                </TableCell>
                                <TableCell align="center">
                                    <EditCompany
                                        id_company={company.id_company}
                                        name={company.name}
                                        rfc={company.rfc}
                                        address={company.address}
                                        profile={company.profile}
                                        schedule={company.schedule}
                                        sector={company.sector}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteCompany
                                        id_company={company.id_company}
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
