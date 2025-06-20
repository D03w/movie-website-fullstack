import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon, FilmIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { AutoGet } from '../../config/AppService/AppService'
import { APP_API } from '../../config/BaseConfig'

export default function CreateMovie({ open, setOpen, form, handleChange, formData, create, id, update }) {
  const handleClick = () => {
    if (id) {
      update()
    } else {
      create()
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={setOpen} className="relative z-10 texxt-white">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-950 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-gray-950 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-300/50 sm:mx-0 sm:size-10">
                    <FilmIcon aria-hidden="true" className="size-6 text-green-600" />
                  </div> */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <DialogTitle as="h3" className="text-base font-semibold text-white">
                      Yangi kino yaratish
                    </DialogTitle>
                    <div className="mt-6 w-full text-white">
                      {
                        form?.map(item => (
                          <div className='mt-3'>
                            {item.type === "text" || item.type === "file" && item.name != "season" ? <label className='w-full'>
                              <span>{item.label}</span>
                              <br />
                              <input type={item.type} placeholder='Kino nomini kiriting..' className='p-2 text-white rounded border-1 border-red-300 mt-2 w-full' value={item.type != "file" ? formData?.[item.name] : ''} onChange={(e) => handleChange(item.name, item.type === "text" ? e.target.value : e.target.files[0])} />
                            </label> : item.name === "series" && item.name != "genre" && formData?.movieType === "series" || formData?.movieType === "animeSeries" ? (
                              <div>
                                <label>
                                  <span>{item.label}</span>
                                  <select className='p-2 text-white rounded border-1 border-red-300 mt-2 w-full bg-gray-950' onChange={(e) => handleChange(item.name, e.target.value)}>
                                    <option value={null}>Tanlang</option>
                                    {
                                      item.arr?.map(item => (
                                        <option value={item.value}>{item.name}</option>
                                      ))
                                    }
                                  </select>
                                </label>
                              </div>
                            ) : item.name === "genre" ? (
                               <label>
                                  <span>{item.label}</span>
                                  <select className='p-2 text-white rounded border-1 border-red-300 mt-2 w-full bg-gray-950' onChange={(e) => handleChange(item.name, e.target.value)}>
                                    <option value={null}>Tanlang</option>
                                    {
                                      item.arr?.map(item => (
                                        <option value={item._id}>{item.name}</option>
                                      ))
                                    }
                                  </select>
                                </label>
                            ) : item.name != "series" && item.name != "season" && item.name != "genre" && (
                              <label>
                                <span>{item.label}</span>
                                <select className='p-2 text-white rounded border-1 border-red-300 mt-2 w-full bg-gray-950' onChange={(e) => handleChange(item.name, e.target.value)}>
                                  <option value={null}>Tanlang</option>
                                  {
                                    item.arr?.map(item => (
                                      <option value={item.value}>{item.name}</option>
                                    ))
                                  }
                                </select>
                              </label>
                            )}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    handleClick()
                  }}
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  Saqlash
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-950 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
