import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import {
  Input,
  H1,
  H2,
  H3,
  Strong,
  Form,
  Label,
  Div,
  Section,
  Container,
  Underline,
  Paragraph,
} from "../../Styles/GlobalStyle";
import { Button } from "../button";
import CurrencyInput from "react-currency-input-field";

interface UserData {
  amount: string;
  installments: number;
  mdr: number;
  days: Array<number>;
}

export const CalculatoPage = () => {
  const [days, setDays] = useState<string[]>(["1", "15", "30", "90"]);
  const [values, setValues] = useState<number[]>([]);
  const Calculator = (userData: UserData) => {
    const { amount, installments, mdr, days } = userData;
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", {
        amount,
        installments,
        mdr,
        days,
      })
      .then((response) => {
        setDays(Object.keys(response.data));
        setValues(Object.values(response.data));
      })
      .catch((err) => console.log(err));
  };

  const formSchema = Yup.object().shape({
    amount: Yup.number().positive().typeError("Campo obrigátorio"),
    installments: Yup.number()
      .min(1, "Minimo de 1 parcela")
      .max(12, "Máximo de 12 parcelas")
      .typeError("Campo obrigátorio"),
    mdr: Yup.number()
      .positive()
      .max(100, "Valor maximo para mdr")
      .typeError("Campo obrigátorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const onSubmit = (data: UserData) => {
    console.log(data);
    Calculator(data);
  };

  return (
    <Container>
      <Div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <H1>Simule sua Antecipação</H1>
          <Label>informe o valor da venda *</Label>
          {/* <CurrencyInput
            prefix="R$"
            className="amount"
            decimalsLimit={2}
            allowDecimals={true}
            allowNegativeValue={false}
            inputMode="numeric"
            {...register("amount")}
          /> */}
          <Input type="number" {...register("amount")} />
          <Paragraph>{errors.amount?.message}</Paragraph>
          <Label>Em quantas parcelas *</Label>
          <Input type="number" {...register("installments")} />
          <Paragraph>{errors.installments?.message}</Paragraph>
          <Label>Informe o percentual de MDR *</Label>
          <Input type="number" {...register("mdr")} />
          <Paragraph>{errors.mdr?.message}</Paragraph>
          <Label>Dias de antecipação</Label>
          <div>
            <input
              type="checkbox"
              defaultChecked
              value={1}
              {...register("days")}
            />
            <Label>1</Label>
            <input
              type="checkbox"
              defaultChecked
              value={15}
              {...register("days")}
            />
            <Label>15</Label>
            <input
              type="checkbox"
              defaultChecked
              value={30}
              {...register("days")}
            />
            <Label>30</Label>
            <input type="checkbox" value={60} {...register("days")} />
            <Label>60</Label>
            <input
              type="checkbox"
              defaultChecked
              value={90}
              {...register("days")}
            />
            <Label>90</Label>
          </div>
          <Button />
        </Form>
        <Section>
          <H2>VOCÊ RECEBERÁ:</H2>
          <Underline />
          {days.map((element, index) =>
            element !== "1" ? (
              <H3 key={index}>
                Em {element} dias:{" "}
                <Strong>
                  R$ {values[index] ? values[index] / 100 : "0.00"}
                </Strong>
              </H3>
            ) : (
              <H3 key={index}>
                Amanhã:{" "}
                <Strong>
                  R$ {values[index] ? values[index] / 100 : "0.00"}
                </Strong>
              </H3>
            )
          )}
        </Section>
      </Div>
    </Container>
  );
};
