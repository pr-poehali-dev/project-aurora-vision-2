import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как сделать заказ?",
    answer:
      "Выберите понравившиеся товары, добавьте их в корзину и оформите заказ. Это займёт всего пару минут. После оформления вы получите подтверждение на email с деталями и сроками доставки.",
  },
  {
    question: "Какие способы доставки доступны?",
    answer:
      "Мы доставляем курьером по всей России, а также в пункты выдачи СДЭК, Boxberry и Почты России. Доставка в пределах Москвы — от 1 дня, по России — 2–7 рабочих дней. При заказе от 5 000 ₽ — бесплатная доставка.",
  },
  {
    question: "Можно ли вернуть или обменять товар?",
    answer:
      "Да, мы принимаем возврат в течение 30 дней с момента получения. Товар должен сохранять товарный вид, бирки и упаковку. Обмен на другой размер или цвет — бесплатный.",
  },
  {
    question: "Как выбрать правильный размер?",
    answer:
      "На каждой странице товара есть таблица размеров с точными меркам. Если сомневаетесь — напишите нам, и мы поможем подобрать идеальный вариант под ваши параметры.",
  },
  {
    question: "Есть ли у вас офлайн-магазин?",
    answer:
      "Да! Наш шоурум находится в Москве — адрес указан в разделе «Контакты». Там вы можете примерить вещи и получить персональную консультацию стилиста.",
  },
  {
    question: "Как следить за новыми поступлениями?",
    answer:
      "Подпишитесь на нашу рассылку или следите за нами в социальных сетях — там мы первыми публикуем информацию о новых коллекциях, акциях и специальных предложениях.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}