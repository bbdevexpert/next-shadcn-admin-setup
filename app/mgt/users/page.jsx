'use client'
import { useState } from 'react'
import { IconMailPlus, IconUserPlus } from '@tabler/icons-react'
import useDialogState from '@/hooks/use-dialog-state'
import { Button } from '@/components/ui/button'
import { UsersActionDialog } from './_components/users-action-dialog'
import { columns } from './_components/users-columns'
import { UsersDeleteDialog } from './_components/users-delete-dialog'
import { UsersInviteDialog } from './_components/users-invite-dialog'
import { UsersTable } from './_components/users-table'

import { User, userListSchema } from './_data/schema'
import { users } from './_data/users'
import UsersContextProvider from './_context/users-context'

export default function Users() {
  // Dialog states
  const [currentRow, setCurrentRow] = useState(null)
  const [open, setOpen] = useDialogState(null)

  // Parse user list
  const userList = userListSchema.parse(users)

  return (
    <UsersContextProvider value={{ open, setOpen, currentRow, setCurrentRow }}>

      <div className='mb-2 flex items-center justify-between space-y-2 flex-wrap'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>User List</h2>
          <p className='text-muted-foreground'>
            Manage your users and their roles here.
          </p>
        </div>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='space-x-1'
            onClick={() => setOpen('invite')}
          >
            <span>Invite User</span> <IconMailPlus size={18} />
          </Button>
          <Button className='space-x-1' onClick={() => setOpen('add')}>
            <span>Add User</span> <IconUserPlus size={18} />
          </Button>
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <UsersTable data={userList} columns={columns} />
      </div>

      <UsersActionDialog
        key='user-add'
        open={open === 'add'}
        onOpenChange={() => setOpen('add')}
      />

      <UsersInviteDialog
        key='user-invite'
        open={open === 'invite'}
        onOpenChange={() => setOpen('invite')}
      />

      {currentRow && (
        <>
          <UsersActionDialog
            key={`user-edit-${currentRow.id}`}
            open={open === 'edit'}
            onOpenChange={() => {
              setOpen('edit')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <UsersDeleteDialog
            key={`user-delete-${currentRow.id}`}
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />
        </>
      )}
    </UsersContextProvider>
  )
}
