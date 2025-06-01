import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';

export default function Home() {
  return (
    <>      
      <div>
        <Input/>
      </div>
      <div className='flex gap-4 mt-5'>
        <Button size='xs'>Primary</Button>
        <Button variant={'destructive'}>Destructive</Button>
        <Button variant={'outline'}>Outline</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'ghost'}>Ghost</Button>
        <Button variant={'muted'}>Muted</Button>
        <Button variant={'tertiary'}>tertiary</Button>
      </div>
      <div className='mt-5'>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="cherry">Cherry</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
