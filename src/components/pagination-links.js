import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const PaginationLinks = ({ currentPage, numberOfpages}) => {
    const isFirst = currentPage ===1
    const isLast = currentPage === numberOfpages;
    const previousPage = currentPage - 1 === 1 ? '/blog' : '/blog/' + (currentPage - 1).toString();
    const nextPage = '/blog/' + (currentPage + 1).toString();

    return(
        <Pagination aria-label="Page navigation example">
            {isFirst ? (
                <PaginationItem disabled>
                    <PaginationLink previous href="/"></PaginationLink>
                </PaginationItem>
            ) : (
                <PaginationItem disabled>
                    <PaginationLink previous href={previousPage}></PaginationLink>
                </PaginationItem>
            )}
            {Array.from({length:numberOfpages},(_, i) => currentPage ===i+1 ?(
                <PaginationItem active key={`page-number${i+1}`}>
                    <PaginationLink href={`/${i===0 ? '' : 'blog/'+ (i+1)}`}>
                        {i+1}
                    </PaginationLink>
                </PaginationItem>
            ) : (
                <PaginationItem key={`page-number${i+1}`}>
                    <PaginationLink href={`/${i===0 ? '' : 'blog/'+ (i+1)}`}>
                        {i+1}
                    </PaginationLink>
                </PaginationItem>
            )  )}
            {isLast ? (
                <PaginationItem disabled>
                    <PaginationLink next href={nextPage}></PaginationLink>
                </PaginationItem>
            ) : (
                <PaginationItem disabled>
                    <PaginationLink next href={nextPage}></PaginationLink>
                </PaginationItem>
            )}

        </Pagination>

    )

}
export default PaginationLinks