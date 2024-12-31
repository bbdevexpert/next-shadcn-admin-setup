import dynamic from 'next/dynamic';
const CreateTestimonial = dynamic(() => import('@/components/testimonials/CreateTestimonial'))

export default async function Page() {
    return <CreateTestimonial />
}
