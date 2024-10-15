import { Counter } from './components/Counter'
import { Badge } from './components/ui/Badge'
import { Button } from './components/ui/button/Button'
import { Field } from './components/ui/input/Field'
function App() {
  return (
    <>
      <Badge value={2} />

      <Counter />

      <div className='flex items-center'>
        <Button size='l'>Кнопка</Button>
        <Button size='l' isCheck>
          Кнопка
        </Button>
        <Button size='l' isNotChild isCheck></Button>
        <Button size='l' isDisabled>
          Кнопка
        </Button>
        <Button size='l' isCheck isDisabled>
          Кнопка
        </Button>
        <Button size='l' isNotChild isCheck isDisabled></Button>
        <Button size='l' isNotChild isCheck appearance='green'></Button>
        <Button size='l' isNotChild isSettings appearance='outline'></Button>
        <Button size='m' isNotChild isSettings appearance='outline'></Button>
        <Button size='s' isNotChild isSettings appearance='outline'></Button>
      </div>

      <Button size='m'>Кнопка</Button>
      <Button size='s'>Кнопка</Button>
      <Button size='s' isCheck>
        Кнопка
      </Button>
      <Button size='s' withBadge appearance='outline'>
        Кнопка
      </Button>
      <Button size='s' isNotChild isSettings appearance='outline'></Button>

      <div className='flex'>
        <Button size='l' appearance='outline'>
          Кнопка
        </Button>
        <Button size='l' isCheck appearance='outline'>
          Кнопка
        </Button>
        <Button size='l' isNotChild isCheck appearance='outline'></Button>
        <Button size='l' isCheck appearance='outline' isDisabled>
          Кнопка
        </Button>
      </div>

      <div className='flex'>
        <Button size='l' appearance='vacuum'>
          Кнопка
        </Button>
        <Button size='l' isCheck appearance='vacuum'>
          Кнопка
        </Button>
        <Button size='l' isNotChild isCheck appearance='vacuum'></Button>
      </div>

      <Field label='Адрес электронной почты' />
    </>
  )
}

export default App
