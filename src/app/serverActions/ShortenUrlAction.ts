'use server'

import { UrlShortenerService } from "@/services/UrlShortenerService";
import { revalidatePath } from "next/cache";

const shortenURL = async (formData: FormData) => {
    const originalUrl: string = formData.get('originalUrl') as string;
    console.log("Original URL Passed is ", originalUrl);

    try {
        const shortenerService = new UrlShortenerService();
        const shortUrl = await shortenerService.shortenUrl(originalUrl);

        revalidatePath('/urls');

        return {
            success: true,
            shortUrl: shortUrl
        };
    } catch (error) {
        console.error("Error shortening URL:", error);
        return {
            success: false,
            errorMessage: "An error occurred while shortening the URL."
        };
    }
};

export default shortenURL;