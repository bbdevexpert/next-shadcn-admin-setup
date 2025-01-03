'use client'
import { useState } from 'react'
import { IconDownload, IconPlus } from '@tabler/icons-react'
import useDialogState from '@/hooks/use-dialog-state'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { ConfirmDialog } from '@/components/ui/confirm-dialog'
// import { Main } from '@/components/layout/main'
import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'
import { TasksImportDialog } from './_components/tasks-import-dialog'
import { TasksMutateDrawer } from './_components/tasks-mutate-drawer'
import TasksContextProvider, { TasksDialogType } from './_context/tasks-context'
import { Task } from './_data/schema'
import { tasks } from './_data/tasks'

export default function Tasks() {
  // Local states
  const [currentRow, setCurrentRow] = useState(null)
  const [open, setOpen] = useDialogState(null)

  return (
    <TasksContextProvider value={{ open, setOpen, currentRow, setCurrentRow }}>

      <div className='mb-2 flex items-center justify-between space-y-2 flex-wrap gap-x-4'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            className='space-x-1'
            onClick={() => setOpen('import')}
          >
            <span>Import</span> <IconDownload size={18} />
          </Button>
          <Button className='space-x-1' onClick={() => setOpen('create')}>
            <span>Create</span> <IconPlus size={18} />
          </Button>
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <DataTable data={tasks} columns={columns} />
      </div>

      <TasksMutateDrawer
        key='task-create'
        open={open === 'create'}
        onOpenChange={() => setOpen('create')}
      />

      <TasksImportDialog
        key='tasks-import'
        open={open === 'import'}
        onOpenChange={() => setOpen('import')}
      />

      {currentRow && (
        <>
          <TasksMutateDrawer
            key={`task-update-${currentRow.id}`}
            open={open === 'update'}
            onOpenChange={() => {
              setOpen('update')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            currentRow={currentRow}
          />

          <ConfirmDialog
            key='task-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              setOpen(null)
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
              toast({
                title: 'The following task has been deleted:',
                description: (
                  <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                      {JSON.stringify(currentRow, null, 2)}
                    </code>
                  </pre>
                ),
              })
            }}
            className='max-w-md'
            title={`Delete this task: ${currentRow.id} ?`}
            desc={
              <>
                You are about to delete a task with the ID{' '}
                <strong>{currentRow.id}</strong>. <br />
                This action cannot be undone.
              </>
            }
            confirmText='Delete'
          />
        </>
      )}
    </TasksContextProvider>
  )
}
