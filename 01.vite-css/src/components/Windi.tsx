import { defineComponent } from 'vue'

import { devDependencies } from '../../package.json'

const Baz = defineComponent({
    render() { 
        return (
            <div class="p-20px text-center">
                <p class="font-bold text-2xl mb-2">
                vite version: { devDependencies.vite }
                </p>
                <button 
                    bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
                    text="sm white"
                    font="mono light"
                    p="y-2 x-4"
                    border="2 rounded blue-200"
                >
                    Button
                </button>
            </div>
        )
    }
})
export default Baz