'use client';

import { Paper, Text, Stack, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import quotesData from '../quotes.json';

interface Quote {
    quote: string;
    author: string;
}

export function DailyQuote() {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        // Get quote based on day of year (0-364)
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 0);
        const diff = today.getTime() - startOfYear.getTime();
        const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

        const quoteIndex = dayOfYear % quotesData.length;
        setQuote(quotesData[quoteIndex] as Quote);
    }, []);

    if (!quote) {
        return null;
    }

    return (
        <Paper p="xl" radius="md" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
            <Stack {...({ gap: "sm" } as any)} align="center">
                <Title order={3} size="h4">Daily Quote</Title>
                <Text size="xl" fw={500} style={{ fontStyle: 'italic', textAlign: 'center' }}>
                    &ldquo;{quote.quote}&rdquo;
                </Text>
                <Text size="md" c="dimmed" style={{ textAlign: 'center' }}>
                    — {quote.author}
                </Text>
            </Stack>
        </Paper>
    );
}

