import { Counter } from './components/Counter'
import { Button } from './components/ui/button/Button'
import { Field } from './components/ui/input/Field'
function App() {
  return (
    <>
      <Counter />

      <div className='flex'>
        <Button>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button>Кнопка</Button>

        <Button>
          <Button.Icon value='check' />
        </Button>

        <Button isDisabled>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button isDisabled>Кнопка</Button>

        <Button isDisabled>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='outline'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button appearance='outline'>Кнопка</Button>

        <Button appearance='outline'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='outline' isDisabled>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button appearance='outline' isDisabled>
          Кнопка
        </Button>

        <Button appearance='outline' isDisabled>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='vacuum'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button appearance='vacuum'>Кнопка</Button>

        <Button appearance='vacuum'>
          <Button.Icon value='check' />
        </Button>
      </div>

      <br />

      <div className='flex'>
        <Button size='m'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button size='m'>Кнопка</Button>

        <Button size='m'>
          <Button.Icon value='check' />
        </Button>

        <Button isDisabled size='m'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button isDisabled size='m'>
          Кнопка
        </Button>

        <Button isDisabled size='m'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='outline' size='m'>
          <Button.Icon value='plus' className='mr-2' />
          Кнопка
        </Button>

        <Button appearance='outline' size='m'>
          Кнопка
        </Button>

        <Button appearance='outline' size='m'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='outline' isDisabled size='m'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button appearance='outline' isDisabled size='m'>
          Кнопка
        </Button>

        <Button appearance='outline' isDisabled size='m'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='vacuum' size='m'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button appearance='vacuum' size='m'>
          Кнопка
        </Button>

        <Button appearance='vacuum' size='m'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='vacuum' size='m'>
          Кнопка
          <Button.Badge value={3} className='ml-2' />
        </Button>
      </div>

      <br />

      <div className='flex'>
        <Button size='s'>
          <Button.Icon value='check' className='mr-2' />
          Кнопка
        </Button>

        <Button size='s'>Кнопка</Button>
      </div>

      <div className='flex items-center'>
        <Button appearance='green' size='l'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='green' size='m'>
          <Button.Icon value='check' />
        </Button>

        <Button appearance='green' size='s'>
          <Button.Icon value='check' />
        </Button>
      </div>

      <div className='flex items-center'>
        <Button appearance='outline' size='l'>
          <Button.Icon value='settings' />
        </Button>

        <Button appearance='outline' size='m'>
          <Button.Icon value='settings' />
        </Button>

        <Button appearance='outline' size='s'>
          <Button.Icon value='settings' />
        </Button>

        <Button appearance='outline' size='s' isDisabled>
          <Button.Icon value='settings' />
        </Button>
      </div>

      <div className='flex items-center'>
        <Button appearance='red' size='l'>
          <Button.Icon value='close' />
        </Button>

        <Button appearance='red' size='m'>
          <Button.Icon value='close' />
        </Button>

        <Button appearance='red' size='s'>
          <Button.Icon value='close' />
        </Button>
      </div>

      <Field label='Адрес электронной почты' />
    </>
  )
}

export default App
