import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router'
import 'Details/Shared/Details.css'

interface DetailsProps extends RouteComponentProps{
    match: any
}

const Details: React.FC<DetailsProps> = ({ match }) => {
    return(
        <div>
            <div className="detailsTitleContainer">                
                <h2 className="h2Alignh3">
                    {match.params.id}
                </h2>                                    
            </div>           
        </div>
    )
}

export default withRouter(Details)