import React, { ReactElement, FC } from 'react';

//define interface to represent component properties
interface Props {
    title: String
}

const Header: FC<Props> = ({ title }) : ReactElement => {
    return (
        <div>
            {title}
        </div>
    )
}

export default Header;

// FC that receives an object of any data type and returns a new React element (div)