import React from 'react'

export default function AutoTable({
    read,
    deleteItem,
    head,
    allData,
    tableBody
}) {
    return (
        <div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right">
                    <thead class="text-xs uppercase bg-gray-900">
                        <tr>
                            {
                                head.map(item => (
                                    <th scope='col' className='px-6 py-3'>{item.name}</th>
                                ))
                            }
                            <th scope='col' className='px-6 py-3'>
                                Settings
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map(item => (
                                <tr class="bg-gray-950 border-b border-gray-800">
                                    {tableBody.map(body => {
                                        const value = item[body.name]

                                        return (
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {value}
                                            </th>
                                        )
                                    })}
                                    {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.surname}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.username}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.role}
                                    </td> */}
                                    <td>
                                        <button className='p-2 rounded bg-green-400 text-white cursor-pointer hover:bg-green-500'>Read</button>
                                        <button className='p-2 rounded bg-red-500 text-white cursor-pointer hover:bg-red-600 ms-2'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
