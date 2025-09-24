import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-sm leading-relaxed">“{testimonial.mensaje}”</p>
        <div className="mt-4 text-sm text-muted-foreground">
          — {testimonial.autor} ({testimonial.rol})
        </div>
      </CardContent>
    </Card>
  );
}

