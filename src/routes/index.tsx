import { $, component$, useStore } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';

let func = () => "Yes"
const test = async () => {
  let func = $(()=>"Yes") // Comment this line out to make it work
  let serverFunc = server$(async () => {
    return func()
  })
  return serverFunc()
}

export default component$(() => {
  let store = useStore({
    isWorking: "N/A"
  })
  return <>
    <button onClick$={async ()=>{
      store.isWorking = await test()
    }}>Run</button><br/>
    <p>is working: {store.isWorking}</p>
  </>
})
