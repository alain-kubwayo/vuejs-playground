import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
          const res = await fetch('http://localhost:3000/posts/' + id)
          if(!res.ok){
            throw Error('that post does not exist')
          }
          post.value = await res.json()
        }
        catch (err){
          error.value = err.message
          console.log(error.value)
        }
      }
    //   load()
    return { post, error, load }
}

export default getPost