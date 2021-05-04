import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';


export default function SearchBox() {
    return (
        <div>
            <Icon icon={searchOutlined} />
            <input type="search" name="" />
        </div>
    )
}
