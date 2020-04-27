import React from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PaginationWrap, PaginationList, PaginationItem, PaginationLink } from './pagination.stc'

const Pagination = ({ currentPage, numberOfPages, rootPage }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage = currentPage - 1 === 1 ? rootPage : rootPage + (currentPage - 1).toString();
    const nextPage = rootPage + (currentPage + 1).toString();

    // const isFirst = currentPage ===1;
    // const isLast = currentPage === numberOfPages;
    // const previousPage = currentPage - 1 === 1 ? '/blog' : '/blog/' + (currentPage - 1).toString();
    // const nextPage = '/blog/' + (currentPage + 1).toString();

    return (
        <PaginationWrap>
            <PaginationList>
                {isFirst ? (
                    <PaginationItem disabled={true}>
                        <PaginationLink className="prev" path={previousPage}>
                            <FiChevronLeft />
                            <span>Prev</span>
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                        <PaginationItem>
                            <PaginationLink className="prev" path={rootPage}>
                                <FiChevronLeft />
                                <span>Prev</span>
                            </PaginationLink>
                        </PaginationItem>
                    )}
                {Array.from({ length: numberOfPages }, (_, i) => currentPage === i + 1 ? (
                    <PaginationItem key={`page-number-${i + 1}`} id={`page-number-${i + 1}`}>
                        <PaginationLink active="true" path={`${i === 0 ? '' : rootPage + (i + 1)}`}>
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                        <PaginationItem key={`page-number-${i + 1}`} id={`page-number-${i + 1}`}>
                            <PaginationLink path={`${i === 0 ? rootPage : rootPage + (i + 1)}`}>
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                {isLast ? (
                    <PaginationItem disabled={true}>
                        <PaginationLink className="next" path={nextPage}>
                            <span>Next</span>
                            <FiChevronRight />
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                        <PaginationItem>
                            <PaginationLink className="next" path={nextPage}>
                                <span>Next</span>
                                <FiChevronRight />
                            </PaginationLink>
                        </PaginationItem>
                    )}
            </PaginationList>
        </PaginationWrap>
    )
    // return(
    //     <PaginationWrap>
    //     <PaginationList>
    //         {isFirst ? (
    //             <PaginationItem disabled={true}>
    //                 <PaginationLink className="prev" href="/"></PaginationLink>
    //             </PaginationItem>
    //         ) : (
    //             <PaginationItem >
    //                 <PaginationLink className="prev" href="/blog">Prev</PaginationLink>
    //             </PaginationItem>
    //         )}
    //         {Array.from({length:numberOfPages},(_, i) => currentPage ===i+1 ?(
    //             <PaginationItem active key={`page-number${i+1}`}>
    //                 <PaginationLink href={`/${i===0 ? '' : 'blog/'+ (i+1)}`}>
    //                     {i+1}
    //                 </PaginationLink>
    //             </PaginationItem>
    //         ) : (
    //             <PaginationItem key={`page-number${i+1}`}>
    //                 <PaginationLink href={`/${i===0 ? '' : 'blog/'+ (i+1)}`}>
    //                     {i+1}
    //                 </PaginationLink>
    //             </PaginationItem>
    //         )  )}
    //         {isLast ? (
    //             <PaginationItem disabled={true}>
    //                 <PaginationLink className="next" href={nextPage}></PaginationLink>
    //             </PaginationItem>
    //         ) : (
    //             <PaginationItem >
    //                 <PaginationLink className="next" href={nextPage}>Next</PaginationLink>
    //             </PaginationItem>
    //         )}

    //     </PaginationList>
    //     </PaginationWrap>
    // )
}

export default Pagination;