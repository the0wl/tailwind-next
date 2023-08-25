import * as Input from '@/components/Form/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Bold, Italic, Link, ListOrdered, Mail } from 'lucide-react'
import * as ComboBox from '@/components/Form/ComboBox'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'

export function Details() {
  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
        <div>
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" form="settings" type="submit">
            Save
          </Button>
        </div>
      </div>

      <form
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        id="settings"
        action=""
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Kelvin" />
            </Input.Root>

            <Input.Root>
              <Input.Control id="lastName" defaultValue="Seibt" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email address
          </label>
          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              id="email"
              type="email"
              defaultValue="kelvin.seibt@gmail.com"
            />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger description="SVG, PNG, JPG or GIF (max. 800x400px)" />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>
          <Input.Root>
            <Input.Control id="role" defaultValue="Developer" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>

          <ComboBox.Root placeholder="Select a country ...">
            <ComboBox.Item value="br" text="Brazil" />
            <ComboBox.Item value="us" text="United States" />
          </ComboBox.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>
          <ComboBox.Root placeholder="Select a timezone ...">
            <ComboBox.Item
              value="utc8"
              text="Pacific Standart Time (PST) (UTC-08:00)"
            />
            <ComboBox.Item value="utc3" text="America São Paulo (UTC-03:00)" />
          </ComboBox.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
              Write a short introduction.
            </span>
          </label>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <ComboBox.Root defaultValue="text" placeholder="">
                <ComboBox.Item value="text" text="Plain text" />
                <ComboBox.Item value="md" text="Markdown" />
              </ComboBox.Root>

              <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </Button>
                <Button type="button" variant="ghost">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>

            <TextArea
              id="bio"
              defaultValue="I'm a backend engineer based in Rio Grande do Sul, Brazil."
            />
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="portfolio"
            className="text-sm font-medium text-zinc-700"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger description="PDF (max. 9MB)" />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
