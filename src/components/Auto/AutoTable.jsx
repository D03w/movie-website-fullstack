import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AutoGet } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'
import { ChevronLast, CirclePlay, Eye, Pencil, Trash } from 'lucide-react'

export default function AutoTable({
    read,
    deleteItem,
    update,
    head,
    allData,
    tableBody,
    trailer,
    handleShow
}) {
    return (
        <div>
            <div class="relative overflow-x-auto mt-10">
                <table class="w-full text-sm text-left rtl:text-right">
                    <thead class="text-xs uppercase bg-gray-900">
                        <tr>
                            {
                                head?.map(item => (
                                    <th scope='col' className='px-6 py-3'>{item.name}</th>
                                ))
                            }
                            {trailer && <th scope='col' className='px-6 py-3'>
                                Treyler
                            </th>}
                            <th scope='col' className='px-6 py-3'>
                                Settings
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData?.map(item => (
                                <tr class="bg-gray-950 border-b border-gray-800">
                                    {tableBody?.map(body => {
                                        const value = item[body.name]

                                        return (
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {
                                                    body.name === "photo" ? (
                                                        <img src={value} className='w-10 h-10 rounded-full object-cover' alt="" />
                                                    ) : body.name === "genre" ? (
                                                        <span>{value.name}</span>
                                                    ) : body.name === "series" ? (
                                                        <div>{item.movieType === "createSeries" ? (
                                                            <button className='p-2 rounded bg-cyan-600 cursor-pointer hover:bg-cyan-700 flex items-center justify-center'>Davomi <ChevronLast className='ms-1'/></button>
                                                        ) : ''}</div>
                                                    ) : (
                                                        <span>{value}</span>
                                                    )
                                                }
                                            </th>
                                        )
                                    })}
                                    {trailer && <td>
                                        <button className='p-2 rounded bg-indigo-600 cursor-pointer hover:bg-indigo-700 flex items-center justify-center' onClick={() => handleShow(item)}>Treyler <CirclePlay className='ms-3'/></button>
                                    </td>}
                                    <td className='flex pt-4'>
                                        {read && <button className='p-2 rounded bg-green-400 text-white cursor-pointer hover:bg-green-500'>Read <Eye/></button>}
                                        {update && <button className='p-2 rounded bg-orange-400 text-white cursor-pointer hover:bg-orange-500 flex items-center justify-center' onClick={() => update(item._id)}>Update <Pencil/></button>}
                                        {deleteItem && <button className='p-2 rounded bg-red-500 text-white cursor-pointer hover:bg-red-600 ms-2 flex items-center justify-center' onClick={() => deleteItem(item._id)}>Delete <Trash/></button>}
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
