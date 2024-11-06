import { useForm, SubmitHandler } from 'react-hook-form'
import SimpleMap from './Map'

type FormInput = {
    subject: string,
    email: string,
    message: string

}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>()

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log(data.email)
    }

    return (
        <div>
            <em className="font-extrabold text-3xl">Contactez Le Pipo2-0</em>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-6 bg-white shadow-md rounded'>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">Sujet</label>
                <input {...register('subject')} className="block border w-full px-3 py-2 text-gray-600 placeholder-gray-300 transition duration-300 ease-in-out" type="text" placeholder="Entrez le Sujet" name="subject" id="subject" />

                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                <input {...register('email', { required: true })} className="block border w-full px-3 py-2 text-gray-600 placeholder-gray-300 transition duration-300 ease-in-out" type="email" placeholder="Entrez Votre e-mail" name="email" id="email" />
                {errors.email && <p className='text-[red]'>Email Obligatoire</p>}
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea {...register('message')} className="border resize-none block border w-full px-3 py-2 text-gray-600 placeholder-gray-300 transition duration-300 ease-in-out" rows={5} placeholder="Entrez votre message" name="message" id="message" />

                <input type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" />
                <br /><br />

            </form>
            <h1 className='mt-7 mb-7 text-3xl'>LOCALISATION: Stade Terkocam de bonamoussadi</h1>
            <SimpleMap />
        </div>
    )
}
